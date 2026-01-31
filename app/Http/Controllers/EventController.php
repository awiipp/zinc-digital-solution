<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        return Inertia::render('Events/Events');
    }

    public function table()
    {
        return Inertia::render('Events/EventsTable');
    }

    public function create()
    {
        return Inertia::render('Events/CreateEvent');
    }
}
