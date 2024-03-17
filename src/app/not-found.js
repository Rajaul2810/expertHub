import Link from 'next/link'
import not_found from '../../public/not_found.svg'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className=' flex justify-center items-center h-screen bg-slate-50'>
            <div className=' bg-white grid grid-cols-1 sm:grid-cols-2 justify-center items-center shadow-sm border rounded-sm gap-2 p-5 h-2/3 w-2/3'>
                <Image src={not_found} alt='not found avator'/>
                <div>
                    <h2 className=' text-5xl font-semibold'>Not Found</h2>
                    <p>Could not find requested resource</p>
                    <Link className='btn my-2' href="/">Return Home</Link>
                </div>
            </div>
        </div>
    )
}