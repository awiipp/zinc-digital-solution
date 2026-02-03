<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'full_name' => ['required', 'string'],
            'email' => ['required', 'string', 'email'],
            'whatsapp' => ['required', 'string'],
            'quantity' => ['required', 'integer', 'min:1'],
            'note' => ['nullable', 'string'],
            'total_estimate' => ['required', 'integer'],
        ];
    }
}
