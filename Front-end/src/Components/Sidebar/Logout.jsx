import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout.jsx'

const Logout = () => {

    const { loading, logout } = useLogout();
    return <div className="mt-auto">
        {!loading ? (<BiLogOut className='w-6 h-6 text-white cursor-pointer hover:h-8 hover:w-8'
            onClick={logout} />) :
            (<span className='loading loading-spinner'></span>
            )}

    </div>
}

export default Logout;