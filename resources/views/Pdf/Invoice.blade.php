<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Order Submitted</title>
    <style>
        *,
        *::before,
        *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: DejaVu Sans, sans-serif;
            background-color: #f4f4f5;
            color: #111827;
            min-height: 100vh;
        }

        .invoice-page {
            padding: 48px 80px 56px;
            min-height: 100vh;
        }

        .invoice-wrapper {
            max-width: 672px;
            margin: 0 auto;
            text-align: center;
        }

        /* ===== Card ===== */
        .card-outer {
            position: relative;
            margin-bottom: 32px;
        }

        .card-main {
            position: relative;
            background-color: #ffffff;
            border: 4px solid #18181b;
            padding: 48px;
        }

        /* ===== Check Icon ===== */
        .check-icon {
            width: 64px;
            height: 64px;
            margin: 0 auto 24px;
            color: #18181b;
        }

        /* ===== Heading & Subtext ===== */
        .invoice-title {
            font-family: DejaVu Sans, sans-serif;
            font-size: 2.25rem;
            font-weight: 700;
            margin-bottom: 16px;
            line-height: 1.2;
        }

        .invoice-subtitle {
            font-family: DejaVu Sans, sans-serif;
            font-size: 1.125rem;
            color: #52525b;
            margin-bottom: 24px;
            line-height: 1.5;
        }

        /* ===== Status Banner ===== */
        .status-banner {
            background-color: #fefce8;
            border: 3px solid #eab308;
            padding: 16px;
            margin-bottom: 24px;
        }

        .status-banner .status-label {
            font-family: DejaVu Sans, sans-serif;
            font-weight: 700;
            color: #18181b;
        }

        .status-banner .status-desc {
            font-family: DejaVu Sans, sans-serif;
            font-size: 0.875rem;
            color: #18181b;
            margin-top: 8px;
        }

        /* ===== Order Details Box ===== */
        .order-details {
            text-align: left;
            background-color: #f4f4f5;
            padding: 24px;
            border: 3px solid #18181b;
            margin-bottom: 24px;
        }

        .order-details h3 {
            font-family: DejaVu Sans, sans-serif;
            font-weight: 700;
            font-size: 1.125rem;
            margin-bottom: 12px;
        }

        .detail-row {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 15px;
            font-size: 0.875rem;
            font-family: DejaVu Sans, sans-serif;
        }

        .detail-row td {
            padding: 0;
            font-family: DejaVu Sans, sans-serif;
            vertical-align: middle;
        }

        .detail-row td.label {
            text-align: left;
            color: #52525b;
        }

        .detail-row td.value {
            text-align: right;
            font-weight: 600;
        }

        /* ===== Total ===== */
        .total-divider {
            border-top: 2px solid #a1a1aa;
            padding-top: 8px;
            margin-top: 8px;
        }

        .total-row {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.875rem;
            font-family: DejaVu Sans, sans-serif;
        }

        .total-row td {
            padding: 0;
            font-family: DejaVu Sans, sans-serif;
            vertical-align: middle;
        }

        .total-row td.label {
            text-align: left;
            font-weight: 700;
        }

        .total-row td.value {
            text-align: right;
            font-weight: 700;
            font-size: 1.125rem;
        }

        /* ===== Back Button ===== */
        .btn-back {
            display: block;
            width: 100%;
            text-align: center;
            font-family: DejaVu Sans, sans-serif;
            font-weight: 700;
            font-size: 1rem;
            padding: 12px 20px;
            color: #18181b;
            background-color: transparent;
            border: 3px solid #18181b;
            text-decoration: none;
            cursor: pointer;
            transition: background-color 0.15s ease, color 0.15s ease, transform 0.15s ease;
        }

        .btn-back:hover {
            background-color: #18181b;
            color: #ffffff;
            transform: rotate(1deg);
        }
    </style>
</head>

<body>

    <main class="invoice-page">
        <div class="invoice-wrapper">
            <div class="card-outer">
                <div class="card-main">

                    <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14.414L6.586 12 8 10.586l3 3 5.414-5.414L18 9.586 11 16.414z" />
                    </svg>

                    <h1 class="invoice-title">Order Sent Successfully!</h1>
                    <p class="invoice-subtitle">
                        Thank you for your order. We will contact you soon for further confirmation.
                    </p>

                    <div class="status-banner">
                        <p class="status-label">Status: Pending Confirmation</p>
                        <p class="status-desc">
                            Our team will contact you within 1x24 hours to confirm order details and payment.
                        </p>
                    </div>

                    <div class="order-details">
                        <h3>Order Details:</h3>

                        <table class="detail-row">
                            <tr>
                                <td class="label">Order Number:</td>
                                <td class="value">{{ $order->order_number }}</td>
                            </tr>
                        </table>

                        <table class="detail-row">
                            <tr>
                                <td class="label">Order Date:</td>
                                <td class="value">{{ $order->created_at }}</td>
                            </tr>
                        </table>

                        <table class="detail-row">
                            <tr>
                                <td class="label">Product:</td>
                                <td class="value">{{ $order->product->name }}</td>
                            </tr>
                        </table>

                        <table class="detail-row">
                            <tr>
                                <td class="label">Quantity:</td>
                                <td class="value">{{ $order->quantity }} pcs</td>
                            </tr>
                        </table>

                        <table class="detail-row">
                            <tr>
                                <td class="label">Name:</td>
                                <td class="value">{{ $order->full_name }}</td>
                            </tr>
                        </table>

                        <table class="detail-row">
                            <tr>
                                <td class="label">Email:</td>
                                <td class="value">{{ $order->email }}</td>
                            </tr>
                        </table>

                        <table class="detail-row">
                            <tr>
                                <td class="label">WhatsApp:</td>
                                <td class="value">{{ $order->whatsapp }}</td>
                            </tr>
                        </table>

                        <div class="total-divider">
                            <table class="total-row">
                                <tr>
                                    <td class="label">Total Estimate:</td>
                                    <td class="value">Rp {{ $order->total_estimate }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </main>

</body>

</html>