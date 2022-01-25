import { millisecondsToHours, millisecondsToMinutes, millisecondsToSeconds } from "date-fns";
import { TInviteResponse } from "../discord/invitesTypes";

/**
 * Formats difference between Date objects into nice string
 * @param start Begin Date obj
 * @param end End Date obj
 * @returns Nice formatted string
 */
export function getDeltaTimeFormatted(start: Date, end: Date): string {
  const delta = end.getTime() - start.getTime();
  const MS_IN_SEC = 1000;
  const MS_IN_MIN = MS_IN_SEC * 60;
  const MS_IN_HOUR = MS_IN_MIN * 60;
  const h = millisecondsToHours(delta);
  const min = millisecondsToMinutes(delta - (h * MS_IN_HOUR));
  const sec = millisecondsToSeconds(delta - h * MS_IN_HOUR - min * MS_IN_MIN)
  const ms = delta - h * MS_IN_HOUR - min * MS_IN_MIN - sec * MS_IN_SEC;
  const res =
    (h ? h + ' hours, ' : '')
    + (min ? min + ' mins, ' : '')
    + (sec + ms * 0.001).toFixed(3) + ' secs';
  return res.trim();
}

export function formatDurationAsTime(duration: Duration): string {
  const h = duration.days * 24 + duration.hours
  const m = duration.minutes;
  const s = duration.seconds;
  return `${h} h ${m} min ${s} secs`;
}

export function collectDataFromStream<T>(stream): Promise<T> {
  const chunks = [];

  return new Promise((res, rej) => {
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on('error', (err) => rej(err));
    stream.on('end', () => res(JSON.parse(Buffer.concat(chunks).toString('utf8'))));
  })
}