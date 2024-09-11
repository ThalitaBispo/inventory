"use client"; // Necessário para usar hooks do React

import React, { useState } from 'react'; // Importar React explicitamente
import { Edit, Trash, Eye } from 'lucide-react';
import items from '../data/products/products'; // Importação dos itens do arquivo separado
import Image from 'next/image';

export default function Dashboard() {
    // Estado para a página atual
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState(null);
    const itemsPerPage = 20; // Itens por página

    // Calcular o índice de itens da página atual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    // Funções para navegação entre páginas
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

    // Função para selecionar o item clicado
    const handleItemClick = (item) => {
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
                    className="bg-purple-600 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    Anterior
                </button>
                <span>Página {currentPage} de {Math.ceil(items.length / itemsPerPage)}</span>
                <button 
                    onClick={handleNextPage} 
                    disabled={currentPage === Math.ceil(items.length / itemsPerPage)} 
                    className="bg-purple-600 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    Próximo
                </button>
            </div>

            {/* Tabela de Itens */}
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-purple-600 text-white">
                    <tr>
                        <th className="py-3 px-4 text-left">Código</th>
                        <th className="py-3 px-4 text-left">Nome</th>
                        <th className="py-3 px-4 text-left">Fornecedor 1</th>
                        <th className="py-3 px-4 text-left">Preço</th>
                        <th className="py-3 px-4 text-left">Fornecedor 2</th>
                        <th className="py-3 px-4 text-left">Preço</th>
                        <th className="py-3 px-4 text-left">Descrição</th>
                        <th className="py-3 px-4 text-left">Ações</th> {/* Coluna de Ações */}
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <tr className="border-b cursor-pointer" onClick={() => handleItemClick(item)}>
                                <td className="py-2 px-4">{item.codigo}</td>
                                <td className="py-2 px-4">{item.nome}</td>
                                <td className="py-2 px-4">{item.fornecedor1}</td>
                                <td className="py-2 px-4">{item.preco1}</td>
                                <td className="py-2 px-4">{item.fornecedor2}</td>
                                <td className="py-2 px-4">{item.preco2}</td>
                                <td className="py-2 px-4">{item.descricao}</td>
                                <td className="py-2 px-4 flex space-x-2">
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
                                    <td colSpan={8} className="bg-gray-100 p-4">
                                        <div className="flex items-start space-x-4">
                                            <Image 
                                                src="https://via.placeholder.com/200" 
                                                alt="Imagem do Produto" 
                                                className="w-72 h-72 object-cover" 
                                            />
                                            <div className="flex-1">
                                                <div className="grid grid-cols-3 gap-4 mb-4">
                                                    <div>
                                                        <label className="block text-sm font-medium mb-1">Código:</label>
                                                        <input 
                                                            type="text" 
                                                            value={item.codigo} 
                                                            readOnly
                                                            className="border-b-2 border-gray-300 w-full p-1"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium mb-1">Nome:</label>
                                                        <input 
                                                            type="text" 
                                                            value={item.nome} 
                                                            className="border-b-2 border-gray-300 w-full p-1"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium mb-1">Fornecedor 1:</label>
                                                        <input 
                                                            type="text" 
                                                            value={item.fornecedor1} 
                                                            className="border-b-2 border-gray-300 w-full p-1"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-3 gap-4 mb-4">
                                                    <div>
                                                        <label className="block text-sm font-medium mb-1">Preço 1:</label>
                                                        <input 
                                                            type="text" 
                                                            value={item.preco1} 
                                                            className="border-b-2 border-gray-300 w-full p-1"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium mb-1">Fornecedor 2:</label>
                                                        <input 
                                                            type="text" 
                                                            value={item.fornecedor2} 
                                                            className="border-b-2 border-gray-300 w-full p-1"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium mb-1">Preço 2:</label>
                                                        <input 
                                                            type="text" 
                                                            value={item.preco2} 
                                                            className="border-b-2 border-gray-300 w-full p-1"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-1">Descrição:</label>
                                                    <textarea 
                                                        value={item.descricao} 
                                                        className="border-b-2 border-gray-300 w-full p-1 h-24"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-end space-x-4 mt-4">
                                            <button 
                                                onClick={() => setSelectedItem(null)} 
                                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                                            >
                                                Fechar
                                            </button>
                                            <button 
                                                className="bg-purple-600 text-white px-4 py-2 rounded"
                                            >
                                                Salvar
                                            </button>
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
                    className="bg-purple-600 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    Anterior
                </button>
                <span>Página {currentPage} de {Math.ceil(items.length / itemsPerPage)}</span>
                <button 
                    onClick={handleNextPage} 
                    disabled={currentPage === Math.ceil(items.length / itemsPerPage)} 
                    className="bg-purple-600 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    Próximo
                </button>
            </div>
        </div>
    );
}
