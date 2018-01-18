

module.exports = {
    // addToCart: (req, res, next) => {
    //     const dbInstance = req.app.get('db');

    //     dbInstance.add_to_cart()
    //     .then(p)
    // }

    delete_item: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} = req;

        dbInstance.delete_item([params.prod_id])
        .then(res.status(200).send())
        .catch((error) => {console.log('error', error)})
    }, 

    get_user: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} = req;
        
        dbInstance.get_user([params.id])
        .then((user) => {
            res.status(200).send(user)
        }).catch((error) => {console.log('error', error)})
    },

    new_user: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} = req;

        
        dbInstance.new_user()
        .then((userInfo) => {
            res.status(200).send(userInfo)
        }).catch((error) => {console.log('error', error)})
    },

    order_update: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} = req;

        dbInstance.order_update([params.id])
        .then((order) => {
            res.status(200).send(order);
        }).catch((error) => {
            console.log('error', error);
        });

    },

    read_store: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} = req;

        dbInstance.order_update([params.id])
        .then((prod) => {
            res.status(200).send(prod);
        }).catch((error) => {
            console.log('error', error);
        });

     },

     get_products: (req, res, next) => {
         const dbInstance = req.app.get('db');

         dbInstance.get_products()
         .then((products) => {
             res.status(200).send(products);
    
         }).catch((error) => {
             console.log('error', error);
         })
     }


}