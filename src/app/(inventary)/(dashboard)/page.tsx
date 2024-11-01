"use client"; // Necessário para usar hooks do React

import React, { useState } from 'react';
import { Edit, Trash, Eye } from 'lucide-react'; // Importação dos ícones de ação
import items from '../data/products/products'; // Importação dos itens do arquivo separado
import { Item } from '../../types'; // Importando a interface Item

export default function Dashboard() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null); // Estado para o item selecionado
    const itemsPerPage = 20; // Itens por página

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(items.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleItemClick = (item: Item) => {
        if (selectedItem && selectedItem.codigo === item.codigo) {
            setSelectedItem(null);
        } else {
            setSelectedItem(item);
        }
    };

    return (
        <div className="overflow-x-auto">
            {/* Botões de Paginação no Topo */}
            <div className="flex justify-end items-center py-2 space-x-4">
                <button 
                    onClick={handlePreviousPage} 
                    disabled={currentPage === 1} 
                    className="text-white px-4 py-2 rounded disabled:opacity-50" style={{ backgroundColor: '#172F4C' }}
                >
                    Anterior
                </button>
                <span>Página {currentPage} de {Math.ceil(items.length / itemsPerPage)}</span>
                <button 
                    onClick={handleNextPage} 
                    disabled={currentPage === Math.ceil(items.length / itemsPerPage)} 
                    className="text-white px-4 py-2 rounded disabled:opacity-50" style={{ backgroundColor: '#172F4C' }}
                >
                    Próximo
                </button>
            </div>

            {/* Tabela de Itens */}
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="text-white" style={{ backgroundColor: '#172F4C' }}>
                    <tr>
                        <th className="py-3 px-4 text-left">Código</th>
                        <th className="py-3 px-4 text-left">Nome</th>
                        <th className="py-3 px-4 text-left">Fornecedor 1</th>
                        <th className="py-3 px-4 text-left">Preço 1</th>
                        <th className="py-3 px-4 text-left">Fornecedor 2</th>
                        <th className="py-3 px-4 text-left">Preço 2</th>
                        <th className="py-3 px-4 text-left">Descrição</th>
                        <th className="py-3 px-4 text-left">Ações</th> {/* Coluna de Ações */}
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item) => (
                        <React.Fragment key={item.codigo}>
                            <tr 
                                className="border-b cursor-pointer" 
                                onClick={() => handleItemClick(item)}
                            >
                                <td className="py-2 px-4">{item.codigo}</td>
                                <td className="py-2 px-4">{item.nome}</td>
                                <td className="py-2 px-4">{item.fornecedor1}</td>
                                <td className="py-2 px-4">{item.preco1}</td>
                                <td className="py-2 px-4">{item.fornecedor2}</td>
                                <td className="py-2 px-4">{item.preco2}</td>
                                <td className="py-2 px-4">{item.descricao}</td>
                                <td className="py-2 px-4 flex space-x-2"> {/* Ícones de Ações */}
                                    <button className="text-blue-500 hover:text-blue-700">
                                        <Eye className="w-5 h-5" />
                                    </button>
                                    <button className="text-yellow-500 hover:text-yellow-700">
                                        <Edit className="w-5 h-5" />
                                    </button>
                                    <button className="text-red-500 hover:text-red-700">
                                        <Trash className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                            {selectedItem && selectedItem.codigo === item.codigo && (
                                <tr>
                                    <td colSpan={8} className="py-4 px-6">
                                        {/* Card de Detalhes do Item */}
                                        <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg bg-white">
                                            <img 
                                                src="https://via.placeholder.com/300" 
                                                alt="Produto" 
                                                className="w-full md:w-48 h-auto object-cover border rounded-lg"
                                            />
                                            <div className="flex flex-col flex-1">
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    <div>
                                                        <label className="block text-gray-700">Código</label>
                                                        <input 
                                                            type="text" 
                                                            value={selectedItem.codigo} 
                                                            onChange={(e) => setSelectedItem({ ...selectedItem, codigo: e.target.value })}
                                                            className="w-full border-b-2 border-gray-300 p-2 mt-1"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-gray-700">Nome</label>
                                                        <input 
                                                            type="text" 
                                                            value={selectedItem.nome} 
                                                            onChange={(e) => setSelectedItem({ ...selectedItem, nome: e.target.value })}
                                                            className="w-full border-b-2 border-gray-300 p-2 mt-1"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-gray-700">Fornecedor 1</label>
                                                        <input 
                                                            type="text" 
                                                            value={selectedItem.fornecedor1} 
                                                            onChange={(e) => setSelectedItem({ ...selectedItem, fornecedor1: e.target.value })}
                                                            className="w-full border-b-2 border-gray-300 p-2 mt-1"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                                    <div>
                                                        <label className="block text-gray-700">Preço 1</label>
                                                        <input 
                                                            type="text" 
                                                            value={selectedItem.preco1} 
                                                            onChange={(e) => setSelectedItem({ ...selectedItem, preco1: e.target.value })}
                                                            className="w-full border-b-2 border-gray-300 p-2 mt-1"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-gray-700">Fornecedor 2</label>
                                                        <input 
                                                            type="text" 
                                                            value={selectedItem.fornecedor2} 
                                                            onChange={(e) => setSelectedItem({ ...selectedItem, fornecedor2: e.target.value })}
                                                            className="w-full border-b-2 border-gray-300 p-2 mt-1"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-gray-700">Preço 2</label>
                                                        <input 
                                                            type="text" 
                                                            value={selectedItem.preco2} 
                                                            onChange={(e) => setSelectedItem({ ...selectedItem, preco2: e.target.value })}
                                                            className="w-full border-b-2 border-gray-300 p-2 mt-1"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <label className="block text-gray-700">Descrição</label>
                                                    <textarea 
                                                        value={selectedItem.descricao} 
                                                        onChange={(e) => setSelectedItem({ ...selectedItem, descricao: e.target.value })}
                                                        className="w-full border-b-2 border-gray-300 p-2 mt-1"
                                                    />
                                                </div>
                                                <div className="flex justify-end mt-4">
                                                    <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                                                        Salvar
                                                    </button>
                                                    <button 
                                                        onClick={() => setSelectedItem(null)} 
                                                        className="bg-gray-500 text-white px-4 py-2 rounded"
                                                    >
                                                        Fechar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>

            {/* Botões de Paginação na Base */}
            <div className="flex justify-end items-center py-2 space-x-4">
                <button 
                    onClick={handlePreviousPage} 
                    disabled={currentPage === 1} 
                    className="text-white px-4 py-2 rounded disabled:opacity-50" style={{ backgroundColor: '#172F4C' }}
                >
                    Anterior
                </button>
                <span>Página {currentPage} de {Math.ceil(items.length / itemsPerPage)}</span>
                <button 
                    onClick={handleNextPage} 
                    disabled={currentPage === Math.ceil(items.length / itemsPerPage)} 
                    className="text-white px-4 py-2 rounded disabled:opacity-50" style={{ backgroundColor: '#172F4C' }}
                >
                    Próximo
                </button>
            </div>
        </div>
    );
}
