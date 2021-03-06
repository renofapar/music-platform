import {AppModule} from './app.module'
import {NestFactory} from "@nestjs/core";

const start = async () => {
    try {
        const PORT = process.env.PORT || 5050
        const app = await NestFactory.create(AppModule)

        await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }
    catch (e) {
        console.log(e)
    }
}

start()