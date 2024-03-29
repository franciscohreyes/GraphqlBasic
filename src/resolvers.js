import { tasks } from './sample';
import User from './models/User';

export const resolvers = {
    Query: {
        hello: () => {
            return "Hello word";
        },
        tasks () {
            return tasks;
        },
        async users () {
            return await User.find();
        }
    },
    Mutation: {
        createTask(_, { input }) {
            return input;
        },
        async createUser(_, { input }) {
            const newUser = new User(input)
            await newUser.save();

            return newUser;
        },
        async deleteUser(_, { _id }) {
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_, { _id, input }) {
            return await User.findByIdAndUpdate(_id, input, {new: true});
        }
    }
};