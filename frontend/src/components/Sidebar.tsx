const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-800 text-white h-screen p-4">
            <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
            <ul>
                <li className="mb-2"><a href="/dashboard" className="hover:underline">Dashboard</a></li>
                <li className="mb-2"><a href="/dashboard/profile" className="hover:underline">Profile</a></li>
                <li className="mb-2"><a href="/dashboard/settings" className="hover:underline">Settings</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;