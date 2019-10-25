# **@viasoft/components/kanban**
    - Overview

[Overview](./index) | **API** | [Exemplos](./samples) 

## Inputs

- **headerTemplate**: #template
    - Define o template do cabeçalho do *kanban*;
- **footerTemplate**: #template
    - Define o template do footer do *kanban*;
- **listHeaderTemplate**: #template
    - Define o template cabeçalho da lista;
- **listFooterTemplate**: #template
    - Define o template footer da lista;
- **cardHeaderTemplate**: #template
    - Define o template cabeçalho do card;
- **cardBodyTemplate**: #template
    - Define o template corpo do card;
- **cardFooterTemplate**: #template
    - Define o template footer do card;
- **cardDragPlaceholderTemplate**: #template
    - Define o template placeholder, ou seja, qual item será mostrado na lista durante a movimentação de um card;
- **lists**: *VsKanbanList[]*
    - Array que define cada uma das listas do *kanban*;
- **service**: *VsKanbanService*
    - Serviço que será utilizado pelo *kanban* para cada uma das requisições;
- **cardSize**: *number*
    - Define a altura do card;
        - Caso o tamanho seja dinâmico, utilizar o menor tamanho.
- **pageSize**: *number*
    - Número de itens que serão buscados a cada requisição;
        - Ele será o valor base, ou seja, sempre será pesquisado por múltiplos do **pageSize**, conforme a velocidade do scroll do usuário.



### Tipos 

#### VsKanbanList
**Propriedades**
- **id**?: string | number;
    - Define o *Id* da lista
        - Caso não especificado, será utilizado o title;
- **title**: string;
    - Define o *título* da lista;
- **icon**?: string;
    - Define o *ícone* da lista;
- **data**?: any;
    - Propriedade para adicionar dados customizados;
- **hasAddAction**?: boolean;
    - Define se a lista possuí a ação de adicionar;
- **hasDeleteAction**?: boolean;
    - Define se a lista possuí a ação de deletar;

-----

#### VsKanbanService
**Métodos**
```typescript
getCards(listId: string | number, skipCount: number, pageSize: number): Observable<any> {
    // Método de obter cards para uma determinada lista
}
moveCard(previousList: VsKanbanList, newList: VsKanbanList, previousIndex: number, currentIndex: number, card: VsKanbanCard): Observable<boolean> {
    // Método de mover um card
}
listAddAction(list: VsKanbanList) {
    // Método de adicionar da lista
}
listDeleteAction(list: VsKanbanList) {
    // Método de deletar da lista
}
```

**Utilização**

1 - Adicione a um serviço customizado "extends VsKanbanService"\
2 - Implemente os métodos internos:
- getCards;
- moveCard;
- listAddAction;
- listDeleteAction;

**Observação**: Lembrando que a falta de implementação de um dos métodos, ocasionará um erro no console de método não implementado

-----

#### VsKanbanCard
**Propriedades**
- **id**?: string | number;
    - Define o *Id* do card
        - Caso não especificado, será utilizado o title;
- **title**: string;
    - Define o *título* do card;
- **description**?: string;
    - Define o *descrição* do card;
- **data**?: any;
    - Propriedade para adicionar dados customizados;
- **canMove**?: boolean;
    - Define se o card possuí a ação de movimentar;
