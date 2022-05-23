const productos = [
    { id: '1', categoria: 'malla', nombre: "Blue Zipper Leotard",   price: '$5.500', stock: 40, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus arcu sed eros hendrerit, quis consequat dolor elementum. Curabitur molestie congue erat, eget eleifend ipsum sodales tincidunt. Vestibulum vitae iaculis augue. Morbi in bibendum mi, et vehicula mauris. Aliquam mollis aliquam tellus sed tristique. Sed porta sed justo nec tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.' },
    { id: '2', categoria: 'calza', nombre: "Black Zipper Legging",  price: '$5.400', stock: 50, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus arcu sed eros hendrerit, quis consequat dolor elementum. Curabitur molestie congue erat, eget eleifend ipsum sodales tincidunt. Vestibulum vitae iaculis augue. Morbi in bibendum mi, et vehicula mauris. Aliquam mollis aliquam tellus sed tristique. Sed porta sed justo nec tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.' },
    { id: '3', categoria: 'top', nombre: "Purple Lace Crossback Top",   price: "$4.600", stock: 50, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus arcu sed eros hendrerit, quis consequat dolor elementum. Curabitur molestie congue erat, eget eleifend ipsum sodales tincidunt. Vestibulum vitae iaculis augue. Morbi in bibendum mi, et vehicula mauris. Aliquam mollis aliquam tellus sed tristique. Sed porta sed justo nec tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.' },
    { id: '4', categoria: 'malla',  nombre: "High-Neck Brown Leotard", price: "$3.900", stock: 30, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus arcu sed eros hendrerit, quis consequat dolor elementum. Curabitur molestie congue erat, eget eleifend ipsum sodales tincidunt. Vestibulum vitae iaculis augue. Morbi in bibendum mi, et vehicula mauris. Aliquam mollis aliquam tellus sed tristique. Sed porta sed justo nec tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.' },
    { id: '5', categoria: 'top',  nombre: "Cross-Back Black Top", price: "$3.500", stock: 70, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus arcu sed eros hendrerit, quis consequat dolor elementum. Curabitur molestie congue erat, eget eleifend ipsum sodales tincidunt. Vestibulum vitae iaculis augue. Morbi in bibendum mi, et vehicula mauris. Aliquam mollis aliquam tellus sed tristique. Sed porta sed justo nec tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.' },
    { id: '6', categoria: 'calza',  nombre: "Basic burgundy Legging", price: "$3.500", stock: 100, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus arcu sed eros hendrerit, quis consequat dolor elementum. Curabitur molestie congue erat, eget eleifend ipsum sodales tincidunt. Vestibulum vitae iaculis augue. Morbi in bibendum mi, et vehicula mauris. Aliquam mollis aliquam tellus sed tristique. Sed porta sed justo nec tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.' }
]


export const getFetch = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
                const query = id ? productos.find(producto => producto.id === id ) : productos                                  
                resolve( query )                           
            }, 600)
        })            
    
}