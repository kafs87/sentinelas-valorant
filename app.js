function pesquisar() {
    // Obtém o elemento da página onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Captura o valor do campo de pesquisa e remove os espaços em branco
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();
    
    // Verificação de segurança: caso o campo de pesquisa seja vazio ou tenha menos de 2 caracteres
    if (campoPesquisa.length < 2) {
        section.innerHTML = "<p class=nada-encontrado>Digite ao menos 2 caracteres para buscar.</p>";
        return;
    }
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    
    // Percorre a lista de personagens (sentinelas) para encontrar correspondências
    for (let personagens of sentinelas) {
        if (
            personagens.nome.toLowerCase().includes(campoPesquisa.toLowerCase()) || 
            personagens.descricao.toLowerCase().includes(campoPesquisa.toLowerCase()) || 
            personagens.tags.some(tag => tag.toLowerCase().includes(campoPesquisa.toLowerCase()))
        ) {
            // Adiciona o resultado encontrado ao HTML
            resultados += `
                <div class="item-resultado">
                    <h2 class="nomesPersonagens"> 
                        ${personagens.nome}  <!-- Mostra o nome do personagem -->
                    </h2>
                    <p class="descricao-meta">${personagens.descricao}</p> <!-- Mostra a descrição do personagem -->
                    <a href="${personagens.link}" target="_blank">Mais detalhes</a> <!-- Link para mais informações sobre o personagem -->
                </div>`;
        }
    }
    
    // Caso não encontre nenhum resultado
    if (!resultados) {
        section.innerHTML = '<p class="nada-encontrado">Nada foi encontrado.</p>';
    } else {
        // Exibe os resultados encontrados
        section.innerHTML = resultados;
    }
}
