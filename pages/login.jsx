import { getProviders, signIn } from 'next-auth/react'

const Login = ({ providers }) => {
    return (
        <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center space-y-5">
           <img className="w-52" src="https://pngimg.com/uploads/letter_q/letter_q_PNG46.png" alt="gambar" />
           {Object.values(providers).map((provider)=>(
               <div key={provider.name}>
                   <button className="text-white bg-gradient-to-r from-purple-800 to-yellow-500 p-5 rounded-full" onClick={() => signIn(provider.id, { callbackUrl: "/" })}>Login with {provider.name}</button>
               </div>
           ))}
        </div>
    )
}

export default Login

export async function getServerSideProps() {
    const providers = await getProviders()

    return{
        props: {
            providers,
        },
    }
}
