<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index()
    {
        return Inertia::render('Clients/Clients');
    }

    public function table()
    {
        return Inertia::render('Clients/ClientsTable');
    }

    public function create()
    {
        return Inertia::render('Clients/CreateClient');
    }
}
