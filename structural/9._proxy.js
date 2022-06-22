function networkFetch(url) {
    return `url: ${url} - ответ с сервера`
}

const cache = new Set() // Set хранит данные, но в единственном экземпляре
const proxiedFetch = new Proxy (networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0]
        if (cache.has(url)){
            return `url: ${url} - ответ из кеша`
        } else {
            cache.add(url)
            return Reflect.apply(target, thisArg, args)
        }

    }
})

console.log(proxiedFetch('angular.io'));
console.log(proxiedFetch('react.io'));
console.log(proxiedFetch('angular.io'));