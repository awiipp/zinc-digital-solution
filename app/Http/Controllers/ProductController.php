<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::latest()->get();

        return Inertia::render('Products/Products', [
            'products' => $products,
        ]);
    }

    public function table(Request $request)
    {
        $status = $request->query('status', 'all');

        $products = Product::when($status !== 'all', function ($q) use ($status) {
            $q->where('status', $status);
        })->latest()->paginate(10)->withQueryString();

        return Inertia::render('Products/ProductsTable', [
            'products' => $products,
            'status' => $status,
        ]);
    }

    public function show(string $code)
    {
        $product = Product::where('product_code', $code)->first();

        return Inertia::render('Products/Product', [
            'product' => $product,
        ]);
    }

    public function create()
    {
        return Inertia::render('Products/CreateProduct');
    }

    public function store(ProductRequest $request)
    {
        $validated = $request->validated();

        $validated['product_code'] = "PRD-" . Str::upper(Str::random(12));
        $validated['slug'] = Str::slug($validated['name']);

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = uniqid('product_') . '.' . $file->extension();

            $validated['image'] = Storage::disk('public')->putFileAs('products', $file, $fileName);
        }

        Product::create($validated);

        return redirect()->route('products.table');
    }

    public function edit(string $code)
    {
        $product = Product::where('product_code', $code)->first();

        return Inertia::render('Products/EditProduct', [
            'product' => $product,
        ]);
    }

    public function update(ProductRequest $request, string $code)
    {
        $product = Product::where('product_code', $code)->first();

        $validated = $request->validated();

        if ($request->hasFile('image')) {
            if ($product->image && Storage::disk('public')->exists($product->image)) {
                Storage::disk('public')->delete($product->image);
            }

            $file = $request->file('image');
            $fileName = uniqid('product_') . '.' . $file->extension();

            $validated['image'] = Storage::disk('public')->putFileAs('products', $file, $fileName);
        } else {
            unset($validated['image']);
        }

        $product->update($validated);

        return redirect()->route('products.table');
    }

    public function destroy(string $code)
    {
        $product = Product::where('product_code', $code)->first();

        if ($product->image && Storage::disk('public')->exists($product->image)) {
            Storage::disk('public')->delete($product->image);
        }

        $product->delete();

        return redirect()->back();
    }
}
