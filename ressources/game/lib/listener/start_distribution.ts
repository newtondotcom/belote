import type { EventShared } from '@coinche/shared';

export async function translateStartDistribution(event: EventShared) {
    console.log('start distribution', event);
    const storeAbout = useAboutStore();
    storeAbout.setTimeDistrib(true);
}