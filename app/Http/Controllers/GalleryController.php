<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function index()
    {
        return Inertia::render('Galleries/Galleries');
    }

    public function table()
    {
        return Inertia::render('Galleries/GalleriesTable');
    }

    public function create()
    {
        return Inertia::render('Galleries/CreateGallery');
    }
}
