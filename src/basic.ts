function Min(minValue: number) {
    return function (target: any, propertyKey: string | symbol) {
        let value: number;

        const getter = () => value;
        const setter = (newValue: number) => {
            if (newValue < minValue) {
                throw new Error(`${String(propertyKey)} cannot be less than ${minValue}`);
            }
            value = newValue;
        };

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}

function Max(maxValue: number) {
    return function (target: any, propertyKey: string | symbol) {
        let value: number;

        const getter = () => value;
        const setter = (newValue: number) => {
            if (newValue > maxValue) {
                throw new Error(`${String(propertyKey)} cannot be greater than ${maxValue}`);
            }
            value = newValue;
        };

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}

function Required(target: any, propertyKey: string | symbol) {
    let value: string;

    const getter = () => value;
    const setter = (newValue: string) => {
        if (!newValue) {
            throw new Error(`${String(propertyKey)} is required`);
        }
        value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}

class Student {
    @Required
    firstName: string;

    @Required
    lastName: string;

    class: string;

    @Min(0)
    @Max(12)
    grade: number;

    constructor(firstName: string, lastName: string, studentClass: string, grade: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.class = studentClass;
        this.grade = grade;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    toJSON() {
        const { grade, ...rest } = this;
        return rest;
    }
}

export default Student;
