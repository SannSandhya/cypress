class ProductVisibility {
    visibility()
    {
        return cy.get('[data-test="inventory-container"]')
    }
    productlist()
    {
        return cy.get('[data-test="inventory-list"]')
    }
    productdescription()
    {
        return cy.get('[data-test="inventory-item-name"]')
    }
    colourchange(){
        return cy.get('[data-test="inventory-item-desc"]')
    }
    pricevisibility(){
        return cy.get('[data-test="inventory-item-price"]')
    }
}
export default ProductVisibility