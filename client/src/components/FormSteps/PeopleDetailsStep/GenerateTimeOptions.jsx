export const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      const formattedHour = hour.toString().padStart(2, '0'); // Ensures two digits
      options.push(
        <option key={formattedHour} value={`${formattedHour}:00`}>
          {formattedHour}:00
        </option>
      );
    }
    return options;
  };