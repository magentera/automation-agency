import { authenticate } from "./actions"
import LoginForm from "./login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Site Under Development</h1>
          <p className="mt-2 text-sm text-gray-600">Please enter the password to access this site.</p>
        </div>
        <LoginForm authenticate={authenticate} />
      </div>
    </div>
  )
}

