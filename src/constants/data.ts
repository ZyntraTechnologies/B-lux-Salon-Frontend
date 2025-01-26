import { Designer, Service } from "../typescript/interfaces/interface.types";
import designer1 from '../assets/images/designer-1.png';
import designer2 from '../assets/images/designer-2.png';
import designer3 from '../assets/images/designer-3.png';
import service1 from '../assets/images/service-1.png';
import service2 from '../assets/images/service-2.png';
import service3 from '../assets/images/service-3.png';

export const designers: Designer[] = [
    { id: 1, image: designer1, name: 'One', role: 'Barber' },
    { id: 2, image: designer2, name: 'Two', role: 'Lead Designer & Barber' },
    { id: 3, image: designer3, name: 'Three', role: 'Designer' },
];

export const services: Service[] = [
    { id: 1, image: service1, serviceName: 'Shaving' },
    { id: 2, image: service2, serviceName: 'Beard Trimming' },
    { id: 3, image: service3, serviceName: 'Grooming' },
];