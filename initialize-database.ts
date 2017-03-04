import * as mongoose from 'mongoose';

export function initializeDatabase(dbPath:string): Promise<any> {
    return new Promise((resolve, reject) => {
        mongoose.connect(dbPath, (error) => {
            if (error){
                reject(error);
            }
            resolve();
        });
    })
}