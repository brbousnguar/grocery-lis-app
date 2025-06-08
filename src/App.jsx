import { useState, useEffect } from 'react'
import './App.css'

const CATEGORIES = {
  PRODUCE: { name: 'Produce', color: 'bg-green-100 text-green-800' },
  DAIRY: { name: 'Dairy', color: 'bg-blue-100 text-blue-800' },
  MEAT: { name: 'Meat', color: 'bg-red-100 text-red-800' },
  BAKERY: { name: 'Bakery', color: 'bg-yellow-100 text-yellow-800' },
  PANTRY: { name: 'Pantry', color: 'bg-purple-100 text-purple-800' },
  OTHER: { name: 'Other', color: 'bg-gray-100 text-gray-800' },
}

const FOOD_EMOJIS = {
  'egg': '🥚',
  'eggs': '🥚',
  'milk': '🥛',
  'bread': '🍞',
  'apple': '🍎',
  'apples': '🍎',
  'banana': '🍌',
  'bananas': '🍌',
  'orange': '🍊',
  'oranges': '🍊',
  'carrot': '🥕',
  'carrots': '🥕',
  'potato': '🥔',
  'potatoes': '🥔',
  'tomato': '🍅',
  'tomatoes': '🍅',
  'cheese': '🧀',
  'chicken': '🍗',
  'beef': '🥩',
  'fish': '🐟',
  'rice': '🍚',
  'pasta': '🍝',
  'pizza': '🍕',
  'hamburger': '🍔',
  'salad': '🥗',
  'soup': '🥣',
  'coffee': '☕',
  'tea': '🫖',
  'wine': '🍷',
  'beer': '🍺',
  'water': '💧',
  'juice': '🧃',
  'cereal': '🥣',
  'yogurt': '🥛',
  'butter': '🧈',
  'honey': '🍯',
  'jam': '🍯',
  'chocolate': '🍫',
  'candy': '🍬',
  'cookie': '🍪',
  'cookies': '🍪',
  'cake': '🍰',
  'ice cream': '🍦',
  'salt': '🧂',
  'pepper': '🧂',
  'sugar': '🍬',
  'flour': '🌾',
  'oil': '🛢️',
  'vinegar': '🍶',
  'sauce': '🥫',
  'ketchup': '🥫',
  'mustard': '🥫',
  'mayonnaise': '🥫',
  'garlic': '🧄',
  'onion': '🧅',
  'lettuce': '🥬',
  'spinach': '🥬',
  'broccoli': '🥦',
  'corn': '🌽',
  'pepper': '🫑',
  'cucumber': '🥒',
  'mushroom': '🍄',
  'mushrooms': '🍄',
  'strawberry': '🍓',
  'strawberries': '🍓',
  'grape': '🍇',
  'grapes': '🍇',
  'watermelon': '🍉',
  'melon': '🍈',
  'peach': '🍑',
  'pear': '🍐',
  'lemon': '🍋',
  'lime': '🍋',
  'coconut': '🥥',
  'pineapple': '🍍',
  'kiwi': '🥝',
  'mango': '🥭',
  'avocado': '🥑',
  'eggplant': '🍆',
  'peanut': '🥜',
  'peanuts': '🥜',
  'almond': '🥜',
  'almonds': '🥜',
  'cashew': '🥜',
  'cashews': '🥜',
  'walnut': '🥜',
  'walnuts': '🥜',
  'popcorn': '🍿',
  'pretzel': '🥨',
  'pretzels': '🥨',
  'chips': '��',
  'fries': '🍟',
  'noodles': '🍜',
  'sushi': '🍱',
  'taco': '🌮',
  'burrito': '🌯',
  'sandwich': '🥪',
  'hot dog': '🌭',
  'french fries': '🍟',
  'onion rings': '🧅',
  'nuggets': '🍗',
  'wings': '🍗',
  'bacon': '🥓',
  'sausage': '🌭',
  'ham': '🍖',
  'turkey': '🦃',
  'lobster': '🦞',
  'shrimp': '🦐',
  'crab': '🦀',
  'oyster': '🦪',
  'oysters': '🦪',
  'clam': '🦪',
  'clams': '🦪',
  'mussel': '🦪',
  'mussels': '🦪',
  'tofu': '🧊',
  'tempeh': '🧊',
  'seitan': '🧊',
  'quinoa': '🌾',
  'lentil': '🫘',
  'lentils': '🫘',
  'bean': '🫘',
  'beans': '🫘',
  'chickpea': '🫘',
  'chickpeas': '🫘',
  'hummus': '🧆',
  'falafel': '🧆',
  'tabbouleh': '🥗',
  'couscous': '🌾',
  'bulgur': '🌾',
  'barley': '🌾',
  'oats': '🌾',
  'granola': '🥣',
  'muesli': '🥣',
  'toast': '🍞',
  'bagel': '🥯',
  'bagels': '🥯',
  'croissant': '🥐',
  'croissants': '🥐',
  'muffin': '🧁',
  'muffins': '🧁',
  'donut': '🍩',
  'donuts': '🍩',
  'pie': '🥧',
  'pudding': '🍮',
  'jello': '🍮',
  'custard': '🍮',
  'pancake': '🥞',
  'pancakes': '🥞',
  'waffle': '🧇',
  'waffles': '🧇',
  'french toast': '🍞',
  'omelette': '🍳',
  'scrambled eggs': '🍳',
  'bacon and eggs': '🍳',
  'hash browns': '🥔',
  'home fries': '🥔',
  'grits': '🌾',
  'oatmeal': '🥣',
  'porridge': '🥣',
  'cereal': '🥣',
  'toast': '🍞',
  'bagel': '🥯',
  'croissant': '🥐',
  'muffin': '🧁',
  'donut': '🍩',
  'pie': '🥧',
  'pudding': '🍮',
  'jello': '🍮',
  'custard': '🍮',
  'pancake': '🥞',
  'waffle': '🧇',
  'french toast': '🍞',
  'omelette': '🍳',
  'scrambled eggs': '🍳',
  'bacon and eggs': '🍳',
  'hash browns': '🥔',
  'home fries': '🥔',
  'grits': '🌾',
  'oatmeal': '🥣',
  'porridge': '🥣',
}

const PRIORITIES = {
  HIGH: { name: 'High', color: 'text-red-600' },
  MEDIUM: { name: 'Medium', color: 'text-yellow-600' },
  LOW: { name: 'Low', color: 'text-green-600' },
}

function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('groceryItems')
    return savedItems ? JSON.parse(savedItems) : []
  })
  const [newItem, setNewItem] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('PRODUCE')
  const [selectedPriority, setSelectedPriority] = useState('MEDIUM')
  const [filter, setFilter] = useState('ALL')

  useEffect(() => {
    localStorage.setItem('groceryItems', JSON.stringify(items))
  }, [items])

  const addItem = (e) => {
    e.preventDefault()
    if (!newItem.trim()) return

    // Find matching emoji for the input text
    let itemWithEmoji = newItem
    const words = newItem.toLowerCase().split(' ')
    for (const word of words) {
      if (FOOD_EMOJIS[word]) {
        itemWithEmoji = `${FOOD_EMOJIS[word]} ${newItem}`
        break
      }
    }

    setItems([...items, {
      id: Date.now(),
      text: itemWithEmoji,
      completed: false,
      category: selectedCategory,
      priority: selectedPriority,
      quantity: 1
    }])
    setNewItem('')
  }

  const toggleItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const updateQuantity = (id, change) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change)
        return { ...item, quantity: newQuantity }
      }
      return item
    }))
  }

  const filteredItems = items.filter(item => {
    if (filter === 'ALL') return true
    if (filter === 'COMPLETED') return item.completed
    if (filter === 'ACTIVE') return !item.completed
    return item.category === filter
  })

  const sortedItems = [...filteredItems].sort((a, b) => {
    const priorityOrder = { HIGH: 0, MEDIUM: 1, LOW: 2 }
    return priorityOrder[a.priority] - priorityOrder[b.priority]
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          🛒 Grocery List
        </h1>
        
        <form onSubmit={addItem} className="mb-6 space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Add a grocery item..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add
            </button>
          </div>
          
          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.entries(CATEGORIES).map(([key, { name }]) => (
                <option key={key} value={key}>{name}</option>
              ))}
            </select>
            
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.entries(PRIORITIES).map(([key, { name }]) => (
                <option key={key} value={key}>{name}</option>
              ))}
            </select>
          </div>
        </form>

        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          <button
            onClick={() => setFilter('ALL')}
            className={`px-3 py-1 rounded-full text-sm ${
              filter === 'ALL' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('ACTIVE')}
            className={`px-3 py-1 rounded-full text-sm ${
              filter === 'ACTIVE' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter('COMPLETED')}
            className={`px-3 py-1 rounded-full text-sm ${
              filter === 'COMPLETED' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Completed
          </button>
          {Object.entries(CATEGORIES).map(([key, { name, color }]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === key ? 'bg-blue-500 text-white' : color
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <ul className="space-y-3">
          {sortedItems.map(item => (
            <li
              key={item.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleItem(item.id)}
                  className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
                />
                <div className="flex items-center gap-2">
                  <span className={`${item.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                    {item.text}
                  </span>
                  <span className={`text-sm ${PRIORITIES[item.priority].color}`}>
                    ({PRIORITIES[item.priority].name})
                  </span>
                  <span className={`text-sm px-2 py-0.5 rounded-full ${CATEGORIES[item.category].color}`}>
                    {CATEGORIES[item.category].name}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-2 py-1 text-gray-600 hover:text-gray-800"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 py-1 text-gray-600 hover:text-gray-800"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {items.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            Your grocery list is empty! Add some items above.
          </p>
        )}
      </div>
    </div>
  )
}

export default App
