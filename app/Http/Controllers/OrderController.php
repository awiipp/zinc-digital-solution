<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $status = $request->query('status', 'all');

        $orders = Order::with(['product'])->when($status !== 'all', function ($q) use ($status) {
            $q->where('status', $status);
        })->latest()->paginate(10)->withQueryString();

        return Inertia::render('Orders/Orders', [
            'orders' => $orders,
            'status' => $status,
        ]);
    }

    public function create(string $code)
    {
        $product = Product::where('product_code', $code)->first();

        if ($product->status === 'soldout') {
            return redirect()->route('products.show', $product->product_code);
        }

        return Inertia::render('Orders/CreateOrder', [
            'product' => $product,
        ]);
    }

    public function store(OrderRequest $request, string $code)
    {
        $product = Product::where('product_code', $code)->first();

        $validated = $request->validated();

        $validated['product_id'] = $product->id;
        $validated['order_number'] = 'ORD-' . Str::upper(Str::random(4)) . '-' . random_int(100, 999);

        $order = Order::create($validated);

        return redirect()->route('orders.invoice', [
            'number' => $order->order_number,
        ]);
    }

    public function update(Request $request, string $id)
    {
        $order = Order::find($id);

        $validated = $request->validate([
            'status' => ['required', 'in:pending,progress,completed,cancelled'],
        ]);

        $order->update($validated);

        return redirect()->back();
    }

    public function destroy(string $id)
    {
        $order = Order::find($id);

        $order->delete();

        return redirect()->back();
    }

    public function invoice(string $number)
    {
        $order = Order::where('order_number', $number)->first();

        $whatsapp = 'https://wa.me/6288297646784';
        $message = rawurlencode('Halo Admin, saya ingin mengonfirmasi pesanan atas nama *'
            . $order->full_name
            . '* dengan nomor order *'
            . $order->order_number
            . '*. Terima kasih.');

        $message_url = $whatsapp . "?text=" . $message;

        return Inertia::render('Orders/Invoice', [
            'order' => $order,
            'product' => $order->product,
            'message_url' => $message_url,
        ]);
    }

    public function download(string $number)
    {
        $order = Order::with(['product'])->where('order_number', $number)->first();

        $order->total_estimate = number_format((int) $order->total_estimate, 0, ',', '.');

        // return view('Pdf.Invoice', ['order' => $order]);

        $pdf = Pdf::loadView('Pdf.Invoice', [
            'order' => $order,
        ]);

        return $pdf->download('invoice-' . $order->order_number . '.pdf');
    }
}
