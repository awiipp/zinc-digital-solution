<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClientRequest;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index()
    {
        $reviews = Client::where('status', 'published')->latest()->get();
        $clients = Client::where('status', 'published')->pluck('company');

        return Inertia::render('Clients/Clients', [
            'reviews' => $reviews,
            'clients' => $clients,
        ]);
    }

    public function table(Request $request)
    {
        $status = $request->query('status', 'all');

        $clients = Client::when($status !== 'all', function ($q) use ($status) {
            $q->where('status', $status);
        })->latest()->paginate(10)->withQueryString();

        return Inertia::render('Clients/ClientsTable', [
            'clients' => $clients,
            'status' => $status,
        ]);
    }

    public function create()
    {
        return Inertia::render('Clients/CreateClient');
    }

    public function store(ClientRequest $request)
    {
        $validated = $request->validated();

        Client::create($validated);

        return redirect(Auth::check() ? route('clients.table') : route('clients.index'));
    }

    public function edit(string $id)
    {
        $client = Client::find($id);

        return Inertia::render('Clients/EditClient', [
            'client' => $client,
        ]);
    }

    public function update(ClientRequest $request, string $id)
    {
        $client = Client::find($id);

        $validated = $request->validated();

        $client->update($validated);

        return redirect()->route('clients.table');
    }

    public function destroy(string $id)
    {
        $client = Client::find($id);

        $client->delete();

        return redirect()->route('clients.table');
    }

    public function publish(string $id)
    {
        $client = Client::find($id);

        $client->update([
            'status' => 'published'
        ]);

        return redirect()->back();
    }

    public function draft(string $id)
    {
        $client = Client::find($id);

        $client->update([
            'status' => 'draft'
        ]);

        return redirect()->back();
    }
}
