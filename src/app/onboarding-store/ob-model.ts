export interface obData {
    gender: string,
    name: {
        title: string,
        first: string,
        last: string
    },
    location: {
        street: {
            number: number,
            name: string
        },
        city: string,
        state: string,
        country: string,
        postcode: string,
        coordinates: {
            latitude: any,
            longitude: any
        },
        timezone: {
            offset: any,
            description: string
        }
    },
    email: string,
    login: {
        uuid: string,
        username: string,
        password: string,
        salt: string,
        md5: string,
        sha1: string,
        sha256: string
    },
    dob: {
        date: Date,
        age: number
    },
    registered: {
        date: Date,
        age: number
    },
    phone: any,
    cell: any,
    id: {
        name: string,
        value: number
    },
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    },
    nat: string

}