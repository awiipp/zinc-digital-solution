<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessageRequest;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
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
}
