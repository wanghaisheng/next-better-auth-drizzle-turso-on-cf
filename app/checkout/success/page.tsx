import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Payment success page
 * Displayed after a successful payment
 */
export default function SuccessPage() {
  return (
    <div className="container max-w-md mx-auto py-8 px-4 text-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-500 dark:text-green-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Thank you for your purchase. Your transaction has been completed successfully.
        </p>
        <div className="space-y-4">
          <Link href="/">
            <Button className="w-full">Return to Home</Button>
          </Link>
          <Link href="/checkout">
            <Button variant="outline" className="w-full">Back to Checkout</Button>
          </Link>
        </div>
        <div className="mt-6 text-sm text-gray-500">
          This is a demo. No actual payment was processed.
        </div>
      </div>
    </div>
  );
}
