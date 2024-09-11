import { ShoppingCart, Home, User, Settings, Info, Phone, Mail, Calendar, Bell, HelpCircle } from 'lucide-react'; // Importa os ícones do Lucide

export default function SideBar() {
    return (
        <div className="fixed top-0 left-0 w-20 h-screen bg-purple-800 text-white flex flex-col items-center py-4">
            {/* Logo com o ícone de cesta */}
            <div className="mb-12"> {/* Aumentado o espaçamento abaixo do logo */}
                <ShoppingCart className="w-8 h-8" />
            </div>
            {/* Menu de Ícones */}
            <nav className="flex-1 flex flex-col space-y-10 items-center"> {/* Aumentado o espaçamento entre os ícones */}
                <button className="hover:text-purple-300">
                    <Home className="w-6 h-6" />
                </button>
                <button className="hover:text-purple-300">
                    <User className="w-6 h-6" />
                </button>
                <button className="hover:text-purple-300">
                    <Settings className="w-6 h-6" />
                </button>
                {/* Novos Ícones */}
                <button className="hover:text-purple-300">
                    <Info className="w-6 h-6" />
                </button>
                <button className="hover:text-purple-300">
                    <Phone className="w-6 h-6" />
                </button>
                <button className="hover:text-purple-300">
                    <Mail className="w-6 h-6" />
                </button>
                <button className="hover:text-purple-300">
                    <Calendar className="w-6 h-6" />
                </button>
                <button className="hover:text-purple-300">
                    <Bell className="w-6 h-6" />
                </button>
                <button className="hover:text-purple-300">
                    <HelpCircle className="w-6 h-6" />
                </button>
            </nav>
        </div>
    );
}
