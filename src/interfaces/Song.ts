export interface Song {
    /**
     * The UUID identifier of the specific song that is tracked.
     */
    id: string;
    /**
     * The friendly name of the song that will be displayed to users.
     */
    name: string;
    /**
     * The key that the song was originally learnt.
     */
    key: string;
}
