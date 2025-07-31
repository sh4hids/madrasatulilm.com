import { useEffect, useState } from 'react';
import { convertNumbers } from 'bn-number-utils';

type Props = {
    startYear: number;
};

function FooterYear({ startYear }: Props) {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setCurrentYear(new Date().getFullYear());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <span>
            {convertNumbers(startYear)} - {convertNumbers(currentYear)}
        </span>
    );
}

export default FooterYear;
