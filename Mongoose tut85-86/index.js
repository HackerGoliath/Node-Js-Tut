const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log("We are conncted bro");
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

    const kittySchema = new mongoose.Schema({
        name: String
    });

    kittySchema.methods.speak = function speak() {
        const greeting = "My name is " + this.name
        console.log(greeting);
    };

    const Kitten = mongoose.model('Kitten', kittySchema);

    const newKitty = new Kitten({ name: 'DeepakKitty' });
    const newKitty2 = new Kitten({ name: 'Billi' });
    // console.log(newKitty.name);
    // newKitty.speak()

    await newKitty.save();
    await newKitty2.save();
    // newKitty.speak();
    const kittens = await Kitten.find({ name: "Billi" });
    console.log(kittens);
}