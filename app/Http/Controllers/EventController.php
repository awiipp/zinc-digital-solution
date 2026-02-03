<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventRequest;
use App\Models\Article;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::latest()->get();

        return Inertia::render('Events/Events', [
            'events' => $events,
        ]);
    }

    public function table()
    {
        $events = Event::latest()->paginate(10);

        return Inertia::render('Events/EventsTable', [
            'events' => $events,
        ]);
    }

    public function create()
    {
        return Inertia::render('Events/CreateEvent');
    }

    public function store(EventRequest $request)
    {
        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = uniqid('event_') . '.' . $file->extension();

            $validated['image'] = Storage::disk('public')->putFileAs('events', $file, $fileName);
        }

        Event::create($validated);

        return redirect()->route('events.table');
    }

    public function edit(string $id)
    {
        $event = Event::find($id);

        return Inertia::render('Events/EditEvent', [
            'event' => $event,
        ]);
    }

    public function update(EventRequest $request, string $id)
    {
        $event = Event::find($id);

        $validated = $request->validated();

        if ($request->hasFile('image')) {
            if ($event->image && Storage::disk('public')->exists($event->image)) {
                Storage::disk('public')->delete($event->image);
            }

            $file = $request->file('image');
            $fileName = uniqid('event_') . '.' . $file->extension();

            $validated['image'] = Storage::disk('public')->putFileAs('events', $file, $fileName);
        } else {
            unset($validated['image']);
        }

        $event->update($validated);

        return redirect()->route('events.table');
    }

    public function destroy(string $id)
    {
        $event = Event::find($id);

        if ($event->image && Storage::disk('public')->exists($event->image)) {
            Storage::disk('public')->delete($event->image);
        }

        $event->delete();

        return redirect()->route('events.table');
    }
}
