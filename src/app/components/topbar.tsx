import { Plus, User } from 'lucide-react'; // Importa os ícones do Lucide

export default function TopBar() {
    return (
        <div className="bg-white shadow-md flex items-center justify-between px-4 py-2 space-x-4">
            {/* Filtros */}
            <div className="flex space-x-4">
                <select className="border rounded p-1 focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option value="">Código</option>
                    <option value="code1">Código 1</option>
                    <option value="code2">Código 2</option>
                </select>
                <select className="border rounded p-1 focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option value="">Nome</option>
                    <option value="name1">Nome 1</option>
                    <option value="name2">Nome 2</option>
                </select>
                <select className="border rounded p-1 focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option value="">Preço</option>
                    <option value="price1">Preço 1</option>
                    <option value="price2">Preço 2</option>
                </select>
            </div>

            {/* Botão Adicionar */}
            <button className="flex items-center space-x-2 bg-purple-600 text-white p-2 rounded hover:bg-purple-700">
                <Plus className="w-5 h-5" />
                <span>Adicionar</span>
            </button>

            {/* Usuário Fictício */}
            <div className="flex items-center space-x-2">
                <User className="w-6 h-6" />
                <span>Usuário Fictício</span>
            </div>
        </div>
    );
}
