import fs from 'fs';
import path from 'path';


const filePath = path.resolve('data', 'animes.json');

let animes = [];
if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    animes = JSON.parse(data);
} else {
    reescreverLista();
}

const reescreverLista = () => {
    fs.writeFileSync(filePath, JSON.stringify(animes, null, 2));
};


export { animes, reescreverLista };