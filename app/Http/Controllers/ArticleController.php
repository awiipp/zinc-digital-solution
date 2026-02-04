<?php

namespace App\Http\Controllers;

use App\Http\Requests\ArticleRequest;
use App\Models\Article;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::where('status', 'published')->latest()->get();

        return Inertia::render('Articles/Articles', [
            'articles' => $articles,
        ]);
    }

    public function table(Request $request)
    {
        $status = $request->query('status', 'all');

        $articles = Article::when($status !== 'all', function ($q) use ($status) {
            $q->where('status', $status);
        })->latest()->paginate(10)->withQueryString();

        return Inertia::render('Articles/ArticlesTable', [
            'articles' => $articles,
            'status' => $status,
        ]);
    }

    public function show(string $slug)
    {
        $article = Article::where('slug', $slug)->first();

        if ($article->status === 'draft' && !Auth::check()) {
            return redirect()->route('articles.index');
        }

        $newestArticles = Article::where('id', '!=', $article->id)
            ->orderBy('published_at', 'desc')->take(2)->get();

        return Inertia::render('Articles/Article', [
            'article' => $article,
            'newest_articles' => $newestArticles,
        ]);
    }

    public function create()
    {
        return Inertia::render('Articles/CreateArticle');
    }

    public function store(ArticleRequest $request)
    {
        $validated = $request->validated();

        $validated['slug'] = Str::slug($validated['title']) . '-' . uniqid();

        if ($validated['status'] === 'published') {
            $validated['published_at'] = Carbon::now();
        }

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = uniqid('thumbnail_') . '.' . $file->extension();

            $validated['image'] = Storage::disk('public')->putFileAs('articles', $file, $fileName);
        }

        Article::create($validated);

        return redirect()->route('articles.table');
    }

    public function edit(string $slug)
    {
        $article = Article::where('slug', $slug)->first();

        return Inertia::render('Articles/EditArticle', [
            'article' => $article,
        ]);
    }

    public function update(ArticleRequest $request, string $slug)
    {
        $article = Article::where('slug', $slug)->first();

        $validated = $request->validated();

        if ($request->hasFile('image')) {
            if ($article->image && Storage::disk('public')->exists($article->image)) {
                Storage::disk('public')->delete($article->image);
            }

            $file = $request->file('image');
            $fileName = uniqid('thumbnail_') . '.' . $file->extension();

            $validated['image'] = Storage::disk('public')->putFileAs('articles', $file, $fileName);
        } else {
            unset($validated['image']);
        }

        if ($validated['status'] === 'published') {
            $validated['published_at'] = Carbon::now();
        }

        $article->update($validated);

        return redirect()->route('articles.table');
    }

    public function destroy(string $slug)
    {
        $article = Article::where('slug', $slug)->first();

        if ($article->image && Storage::disk('public')->exists($article->image)) {
            Storage::disk('public')->delete($article->image);
        }

        $article->delete();

        return redirect()->route('articles.table');
    }
}
