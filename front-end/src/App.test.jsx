import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('deve renderizar os itens iniciais e botão de gerar pedido', () => {
    render(<App />)

    expect(screen.getByText('Entrada')).toBeInTheDocument()
    expect(screen.getByText('Prato Principal')).toBeInTheDocument()
    expect(screen.getByText('Bebida')).toBeInTheDocument()
    expect(screen.getByText('Sobremesa')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /gerar pedido/i })).toBeInTheDocument()
  })

  it('deve mostrar mensagem de erro se o fetch falhar', async () => {
    global.fetch = vi.fn(() => Promise.resolve({ ok: false }))

    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /gerar pedido/i }))

    await waitFor(() => {
      expect(screen.getByText(/erro ao gerar o pedido/i)).toBeInTheDocument()
    })
  })

  it('deve gerar pedido com itens simulados e exibir botão "CONFIRMAR PEDIDO"', async () => {
    const mockData = [
      { nome: 'Entrada Teste', imagem: '', preco: 10.5 },
      { nome: 'Prato Teste', imagem: '', preco: 22 },
      { nome: 'Bebida Teste', imagem: '', preco: 5 },
      { nome: 'Sobremesa Teste', imagem: '', preco: 7.4 },
    ]

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData.shift()),
      })
    )

    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /gerar pedido/i }))

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /confirmar pedido/i })).toBeInTheDocument()
    })

    fireEvent.click(screen.getByRole('button', { name: /confirmar pedido/i }))

    await waitFor(() => {
      expect(screen.getByText(/pedido confirmado com sucesso/i)).toBeInTheDocument()
    })

    expect(screen.getByText(/total a pagar/i)).toBeInTheDocument()
  })

  it('deve resetar os estados ao clicar em "NOVO PEDIDO"', async () => {
    const mockData = [
      { nome: 'Entrada Teste', imagem: '', preco: 10.5 },
      { nome: 'Prato Teste', imagem: '', preco: 22 },
      { nome: 'Bebida Teste', imagem: '', preco: 5 },
      { nome: 'Sobremesa Teste', imagem: '', preco: 7.4 },
    ]

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData.shift()),
      })
    )

    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /gerar pedido/i }))

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /confirmar pedido/i })).toBeInTheDocument()
    })

    fireEvent.click(screen.getByRole('button', { name: /confirmar pedido/i }))

    await waitFor(() => {
      expect(screen.getByText(/pedido confirmado com sucesso/i)).toBeInTheDocument()
    })

    fireEvent.click(screen.getByRole('button', { name: /novo pedido/i }))

    // Após reset, deve voltar para o estado inicial
    expect(screen.getByRole('button', { name: /gerar pedido/i })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /confirmar pedido/i })).not.toBeInTheDocument()
  })

it('deve mostrar mensagem de erro se o fetch falhar', async () => {
  // Simula fetch retornando erro HTTP
  global.fetch = vi.fn(() => Promise.resolve({ ok: false }));

  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /gerar pedido/i }));

  await waitFor(() => {
    expect(screen.getByText(/erro ao gerar o pedido/i)).toBeInTheDocument();
  });
});


})
