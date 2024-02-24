import RegisterForm from '@/components/register-form'


function page() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <RegisterForm />
          <div className="text-center text-sm text-gray-600 mt-4">
            By signing up, you agree to the{' '}
            <a className="no-underline border-b border-gray-600 text-gray-600" href="#">
              Terms of Service
            </a>{' '}
            and{' '}
            <a className="no-underline border-b border-gray-600 text-gray-600" href="#">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-white -600 mt-6">
          Already have an account?{' '}
          <a className="no-underline border-b border-blue text-blue text-white" href="/auth/login">
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  )
}

export default page