<?php

namespace App\Http\Controllers;

use App\Http\Requests\GalleryRequest;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function index()
    {
        $galleries = Gallery::latest()->get();

        return Inertia::render('Galleries/Galleries', [
            'galleries' => $galleries,
        ]);
    }

    public function table()
    {
        $galleries = Gallery::latest()->paginate(10);

        return Inertia::render('Galleries/GalleriesTable', [
            'galleries' => $galleries,
        ]);
    }

    public function create()
    {
        return Inertia::render('Galleries/CreateGallery');
    }

    public function store(GalleryRequest $request)
    {
        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = uniqid('gallery_') . '.' . $file->extension();

            $validated['image'] = Storage::disk('public')->putFileAs('galleries', $file, $fileName);
        }

        Gallery::create($validated);

        return redirect()->route('galleries.table');
    }

    public function edit(string $id)
    {
        $gallery = Gallery::find($id);

        return Inertia::render('Galleries/EditGallery', [
            'gallery' => $gallery,
        ]);
    }

    public function update(GalleryRequest $request, string $id)
    {
        $gallery = Gallery::find($id);

        $validated = $request->validated();

        if ($request->hasFile('image')) {
            if ($gallery->image && Storage::disk('public')->exists($gallery->image)) {
                Storage::disk('public')->delete($gallery->image);
            }

            $file = $request->file('image');
            $fileName = uniqid('gallery_') . '.' . $file->extension();

            $validated['image'] = Storage::disk('public')->putFileAs('galleries', $file, $fileName);
        } else {
            unset($validated['image']);
        }

        $gallery->update($validated);

        return redirect()->route('galleries.table');
    }

    public function destroy(string $id)
    {
        $gallery = Gallery::find($id);

        if ($gallery->image && Storage::disk('public')->exists($gallery->image)) {
            Storage::disk('public')->delete($gallery->image);
        }

        $gallery->delete();

        return redirect()->route('galleries.table');
    }
}
