<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessageRequest;
use App\Mail\SendReplyMessageMail;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class MessageController extends Controller
{
    public function index(Request $request)
    {
        $status = $request->query('status', 'all');

        $messages = Message::when($status !== 'all', function ($q) use ($status) {
            match ($status) {
                'readed' => $q->whereNotNull('read_at'),
                'unread' => $q->whereNull('read_at'),
            };
        })->latest()->paginate(10)->withQueryString();

        return Inertia::render('Messages/Messages', [
            'messages' => $messages,
            'status' => $status,
        ]);
    }

    public function store(MessageRequest $request)
    {
        $validated = $request->validated();

        Message::create($validated);

        return redirect()->back()->with('success', 'Successfully sent a message');
    }

    public function destroy(string $id)
    {
        $message = Message::find($id);

        $message->delete();

        return redirect()->back();
    }

    public function read(string $id)
    {
        $message = Message::find($id);

        $message->update([
            'read_at' => Carbon::now(),
        ]);

        return redirect()->back();
    }

    public function reply(string $id)
    {
        $message = Message::find($id);

        return Inertia::render('Messages/Reply', [
            'message' => $message,
        ]);
    }

    public function send(Request $request, string $id)
    {
        $message = Message::find($id);

        $validator = Validator::make($request->all(), [
            'title' => ['required', 'string'],
            'reply' => ['required', 'string'],
        ]);

        $validated = $validator->validated();

        $reply = [
            'subject' => $validated['title'],
            'title' => $validated['title'],
            'name' => $message->name,
            'admin_name' => Auth::user()->name,
            'reply' => $validated['reply'],
        ];

        Mail::to($message->email)->send(new SendReplyMessageMail($reply));

        $message->update(['read_at' => Carbon::now()]);

        return redirect()->route('messages.index')->with('success', 'Successed send email reply to ' . $message->email);
    }
}
