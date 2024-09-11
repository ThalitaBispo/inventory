import TopBar from '../components/topbar';
import SideBar from '../components/sidebar';
import Dashboard from "./(dashboard)/page";

export default function InventaryLayout() {
    return (
        <div className="flex h-screen">
            <SideBar />
            <div className="flex flex-col flex-1 ml-20"> {/* Adiciona margem à esquerda para o conteúdo não se sobrepor à sidebar */}
                <TopBar />
                <div className="flex-1 p-6 bg-gray-100">
                    <Dashboard />
                </div>
            </div>
        </div>
    );
}
