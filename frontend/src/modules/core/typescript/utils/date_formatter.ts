import {MONTHS_SHORT, DAYS_SHORT, DAYS, OPERATIONS} from "../config/constants";
import {Commands} from "../config/Commands";
import {CoreUtils} from "./core_utils";


export class DateFormatter {

    public static DAY_IN_MS: number = (86400 * 1000);

    public static monthYearToString(mounth: number, year: number): string {
        return MONTHS_SHORT[mounth] + ' ' + year;
    }

    public static dayMonthToString(day: number, mounth: number): string {
        return day + ' ' + MONTHS_SHORT[mounth];
    }

    public static dayMonthYearToString(day: number, month: number, year: number, hour: number, min: number): string {
        month = month + 1;
        let days: String;
        let months: String;
        let hours: String;
        let minutes: String;
        if (day < 10)
            days = '0' + day.toString();
        else
            days = day.toString();
        if (month < 10)
            months = '0' + month.toString();
        else
            months = month.toString();
        if (hour < 10)
            hours = '0' + hour.toString();
        else
            hours = hour.toString();
        if (min < 10)
            minutes = '0' + min.toString();
        else
            minutes = min.toString();
      return days + '.' + months + '.' + year + '. - ' + hours + ':' + minutes;

    }


    public static dateMonthFromMilliToString(milliseconds: number) {
        let dateFromMilli = new Date(milliseconds);
        return dateFromMilli.getDate() + ' ' + MONTHS_SHORT[dateFromMilli.getMonth()];
    }


    public static dayOfWeekShort(day: number, month: number, year: number): string {
        let d = new Date();
        d.setFullYear(year);
        d.setMonth(month);
        d.setDate(day);
        return DAYS_SHORT[d.getDay()];
    }


    public static dayOfWeekLong(day: number, mounth: number, year: number): any {
        let d = new Date();
        d.setFullYear(year);
        d.setMonth(mounth);
        d.setDate(day);
        let dayFormatted: string = DAYS[d.getDay()];
        return {
            day: dayFormatted,
            dayForTranslation: DateFormatter.dayLanguageTranslationLong(dayFormatted)
        }
    }


    public static monthShort(month: number): string {
        return MONTHS_SHORT[month];
    }


    public static dayMonthParted(date: Date, translationLong: boolean): any {
        let day = DateFormatter.dayOfWeekLong(date.getDate(), date.getMonth(), date.getFullYear())['day'];
        let month = DateFormatter.monthShort(date.getMonth());
        let year = date.getFullYear();
        return {
            dayForTranslation: !translationLong ? DateFormatter.dayLanguageTranslationShort(day) : DateFormatter.dayLanguageTranslationLong(day),
            day: date.getDate(),
            month: month,
            year: year
        }
    }

    public static dayFormat(day: number): string {
        return (day).toString();
    }

    public static getMonthDays(fromDate: Date): Array<Date> {
        let date = new Date(fromDate.getTime());
        let days: Array<Date> = [];
        let currentMonth: number = date.getMonth();
        date.setDate(1);
        while (date.getMonth() === currentMonth) {
            let dateClone = new Date();
            dateClone.setFullYear(date.getFullYear());
            dateClone.setMonth(date.getMonth());
            dateClone.setDate(date.getDate());
            days.push(dateClone);
            date.setDate(date.getDate() + 1);
        }
        return days;
    }

    public static getMonthDaysforMonth(month: number, year: number): Array<number>{
        let days: Array<number> = [];
        let date: Date = DateFormatter.dateFromMonthDayYear(month, 1, year);
        let comparingDate: Date = DateFormatter.dateFromMonthDayYear(month, 1, year);
        while (date.getMonth() === comparingDate.getMonth()) {
            days.push(date.getDate());
            date.setDate(date.getDate() + 1);
        }
        return days;
    }


    public static dateFromMonthDayYear(month: number, day: number, year: number): Date{
        let date = new Date();
        date.setFullYear(year);
        date.setMonth(month);
        date.setDate(day);
        return date;
    }

    public static getMonths(): Array<number>{
        let months: Array<number> = [];
        let month: number = 1;
        while (month <= 12) {
            months.push(month)
            month++;
        }
        return months;
    }

    public static calculateNextMonday(milliseconds: number){
        let date: Date = new Date(milliseconds);
        let day: number = date.getDay();
        return new Date(day !== 0 ? date.setDate(date.getDate() + (8 - day)) : date.setDate(date.getDate() + 1));
    }


    public static getMondayTime(currentTime: number): number {
        let date = new Date(currentTime);
        let monday = date.getDate() - date.getDay() + 1;
        date.setDate(monday);
        date.setHours(0,0,0,0);
        return date.getTime();
    }


    public static calculateDayStart(date: Date) {
        date.setHours(0, 0, 0, 0);
        return date;
    }


    public static dayLanguageTranslationShort(day: string): string {
        return 'DAYS_IN_WEEK.' + day.toUpperCase() + '.SHORT';
    }

    public static dayLanguageTranslationLong(day: string): string {
        return 'DAYS_IN_WEEK.' + day.toUpperCase() + '.LONG';
    }


    public static getDateOffsetFromMS(miliseconds: number, dayOffset: number, operation: string) {
        let date = DateFormatter.calculateDayStart(new Date(miliseconds));
        operation === Commands.PLUS ? date.setDate(date.getDate() + dayOffset) : date.setDate(date.getDate() - dayOffset);
        return date;
    }


    public static getDateOffsetFromDateObj(dayOffset: number, operation: string) {
        let date = DateFormatter.calculateDayStart(new Date());
        operation === Commands.PLUS ? date.setDate(date.getDate() + dayOffset) : date.setDate(date.getDate() - dayOffset);
        return date;
    }


    public static getCurrentDate() {
        return new Date();
    }

    public static compareDates(dateFirst: Date, dateSecond: Date): number {
        return dateFirst.getTime() === dateSecond.getTime() ? 1 : 0;
    }

    public static toPasswordDate(date: any) {
        let pattern = /-?\d{6,}/g;
        let result = date.match(pattern);
        let time = parseInt(result.toString());
        let dateObject = new Date(time);
        return DateFormatter.toDateValue(dateObject.getDate()) +
            DateFormatter.toDateValue(dateObject.getMonth() + 1) +
            DateFormatter.toDateValue(dateObject.getFullYear());
    }


    public static toDateValue(value: any) {
        if (value < 10) {
            return "0" + value;
        }
        else {
            return value + "";
        }
    }

    public static dateFromToExtracted(value: number): any {
        let dateTo = new Date(value);
        dateTo.setFullYear(dateTo.getFullYear())
        dateTo.setMonth(dateTo.getMonth());
        dateTo.setDate(dateTo.getDate() + 6);
        return {
            from: DateFormatter.dateMonthFromMilliToString(value),
            to: DateFormatter.dateMonthFromMilliToString(dateTo.getTime())
        }
    }

    public static getYearsFrom(from: number){
        let years: Array<number> = [];
        let currentYear: number = new Date().getFullYear();
        let yearFrom: number = currentYear - from;
        while (yearFrom < currentYear) {
            years.push(currentYear);
            currentYear --;
        }
        return years;

    }

    public static dayMonthYearSlashFormat(date: Date){
        return CoreUtils.format("{0}/{1}/{2}", [date.getDate(), date.getMonth() + 1, date.getFullYear()]);
    }

    public static milisecondsYearMonthDay(year: number, month: number, day: number): number{
        let date: Date = new Date(year, month, day);
        return date.getTime();
    }

}