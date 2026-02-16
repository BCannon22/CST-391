# MileStone 1
- Author Blake Cannon
- Date: February 15, 2026

# :rocket: Introduction
This project will be a creation of a store front that will primarily look to sell DrumSets to customers with the option to buy invdivual parts such as the snare, toms, cymbals, bass, hardware, and drum heads. The main idea behind the front-end is to allow users to navigate the web application and be able to choose DrumSets that interested them, so they can purchase it and have it sent to them. There is an another option though, where if they are not looking for full DrumSets and instead need specific parts they can purchase those also. This gives users a wide arrange of options to look through and find something that fits their needs. 

# :hammer: Functionality Requirements
- As a buyer, I want to be able to searched through different brands of drum sets with images, names and prices so I quickly browse products.
- As a buyer, I want to be able to pick a certain drum part with images, names, and prices so I can quickly browse through parts I am interested in.
- As a buyer, I want to easily navigate between product categories, so that I can find what I'm looking for without confusion.
- As a buy, I want to be able to click on a drum set to view more details, so that I can learn about its features before making a decision.
- As a developer, I want to create reusable UI components, so that the front-end code is modular and easy to maintain.

# :drum: UML Diagram

```mermaid
---
title: Drum Set - UML Diagram
---
classDiagram
    Drumset <|-- Snare
    Drumset <|-- Cymbals
    Drumset <|-- Toms
    Drumset <|-- Bass
    Drumset <|-- Hardware
    Drumset : +String name
    Drumset : +int price
    Drumset : +String type
    Drumset : +String brand
    Drumset : +String imageUrl
    Drumset: +displayInfo()
    class Snare{
        +String name
        +String brand
        +int price
        +String imageUrl
        +displayInfo()
    }
    class Cymbals{
        +String name
        +String brand
        +int price
        +String imageUrl
        +displayInfo()
    }
    class Toms{
        +String name
        +String brand
        +int price
        +String imageUrl
        +displayInfo()
    }
    class Bass{
        +String name
        +String brand
        +int price
        +String imageUrl
        +displayInfo()
    }
    class Hardware{
        +String name
        +String brand
        +int price
        +String imageUrl
        +displayInfo()
    }
```

# :world_map: Sitemap

```mermaid
---
title: Drum Store Sitemap
---
graph TD
    Home["Home"]
    Products["Products"]
    DrumSets["Drum Sets"]
    DrumParts["Drum Parts"]
    ProductDetails["Product Details"]
    Contact["Contact Us"]
    Cart["Shopping Cart"]
    Checkout["Checkout"]
    Login["Login / Signup"]

    Home --> Products
    Products --> DrumSets
    Products --> DrumParts
    DrumSets --> ProductDetails
    DrumParts --> ProductDetails
    Home --> Contact
    Home --> Cart
    Cart --> Checkout
    Home --> Login
```

# :framed_picture: Wireframe
![DrumWebStore](DrumSetWireFrame.png)
