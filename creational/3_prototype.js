const car = {
    weels: 4,

    init(){
        console.log(`у меня ${this.weels} колеса, мой хозяин ${this.owner}`)
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Дима'
    }
})

carWithOwner.init()