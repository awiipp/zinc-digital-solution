<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        return Inertia::render('Articles/Articles');
    }

    public function table()
    {
        return Inertia::render('Articles/ArticlesTable');
    }

    public function create()
    {
        return Inertia::render('Articles/CreateArticle');
    }

    public function show(string $id)
    {
        return Inertia::render('Articles/Article');
    }
}
