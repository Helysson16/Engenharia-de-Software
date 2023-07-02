const assert = require('assert');
const { CRUD } = require('../src/crud');

describe("CRUD", function() {
  describe("createItem()", function() {
    it("Deve adicionar um item na lista", function() {
      let c = new CRUD();
      c.createItem("Teste");
      assert.strictEqual(c.items.length, 1);
    });

    it("Deve adicionar 3 itens na lista", function() {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      assert.strictEqual(c.items.length, 3);
    });
  });

  describe("readItems()", function() {
    it("Deve retornar uma lista vazia quando não há itens", function() {
      let c = new CRUD();
      const items = c.readItems();
      assert.deepStrictEqual(items, []);
    });

    it("Deve retornar a lista correta quando há itens", function() {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      const items = c.readItems();
      assert.deepStrictEqual(items, ["Item 1", "Item 2", "Item 3"]);
    });
  });

  describe("readItem()", function() {
    it("Deve retornar o item correto pelo índice", function() {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      const item = c.readItem(1);
      assert.strictEqual(item, "Item 2");
    });

    it("Deve retornar undefined para um índice inválido", function() {
      let c = new CRUD();
      const item = c.readItem(10);
      assert.strictEqual(item, undefined);
    });
  });

  describe("updateItem()", function() {
    it("Deve atualizar o item pelo índice corretamente", function() {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      const isUpdated = c.updateItem(1, "Item Atualizado");
      assert.strictEqual(isUpdated, true);
      assert.strictEqual(c.items[1], "Item Atualizado");
    });

    it("Deve retornar false para um índice inválido", function() {
      let c = new CRUD();
      const isUpdated = c.updateItem(10, "Item Atualizado");
      assert.strictEqual(isUpdated, false);
    });
  });

  describe("deleteItem()", function() {
    it("Deve excluir o item pelo índice corretamente", function() {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      const isDeleted = c.deleteItem(1);
      assert.strictEqual(isDeleted, true);
      assert.strictEqual(c.items.length, 2);
      assert.strictEqual(c.items[0], "Item 1");
      assert.strictEqual(c.items[1], "Item 3");
    });

    it("Deve retornar false para um índice inválido", function() {
      let c = new CRUD();
      const isDeleted = c.deleteItem(10);
      assert.strictEqual(isDeleted, false);
    });
  });
});
