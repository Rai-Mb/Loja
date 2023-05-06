/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://Rai:<password>@loja.4ttbdlz.mongodb.net/');

const db = mongoose.connection;

export class dbConnect {}
