import { randomCompanyName } from "../job"
import { randomSentence } from "../sentence"
import productName from "./data/product_name"
import { Product } from "./types"
/**
 * 
 * @returns string
 * @example
 * randomProductName()
 * // =>  Large Coffee
 */
export function randomProductName(): string {
    return productName.adjutives[Math.floor(Math.random() * productName.adjutives.length)] + " " + productName.products[Math.floor(Math.random() * productName.products.length)]
}
/**
 * 
 * @returns string
 * @example
 * randomProductSku()
 * // =>  SKU123456789
 */
export function randomProductSku(): string {
    return "SKU" + Math.random().toString(36).substring(2, 15)
}
/**
 * 
 * @returns string
 * @example
 * randomProductCategory()
 * // =>  Food
 */
export function randomProductCategory(): string {
    return productName.products[Math.floor(Math.random() * productName.products.length)]
}

export function randomProduct() : Product {
    const id = Math.random().toString(36).substring(2, 15)
    const name = randomProductName()
    const sku = randomProductSku()
    const category = randomProductCategory()
    const price = Math.floor(Math.random() * 100)
    const quantity = Math.floor(Math.random() * 100)
    const brand = randomCompanyName()
    const description = randomSentence()
    const image = "https://picsum.photos/200/300?image=" + Math.floor(Math.random() * 100)
    const stock = Math.floor(Math.random() * 100)
    const createdAt = new Date()
    const updatedAt = new Date()
    return {
        id,
        name,
        sku,
        category,
        price,
        quantity,
        brand,
        description,
        image,
        stock,
        createdAt,
        updatedAt
    }
}