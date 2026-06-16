import logging
from typing import Dict, Any, Callable, List

logger = logging.getLogger(__name__)

class EventBus:
    def __init__(self):
        self.subscribers: Dict[str, List[Callable]] = {}

    def subscribe(self, event_name: str, callback: Callable):
        if event_name not in self.subscribers:
            self.subscribers[event_name] = []
        self.subscribers[event_name].append(callback)

    def publish(self, event_name: str, payload: Dict[str, Any]):
        logger.info(f"Event published: {event_name} with payload: {payload}")
        if event_name in self.subscribers:
            for callback in self.subscribers[event_name]:
                try:
                    callback(payload)
                except Exception as e:
                    logger.error(f"Error executing callback for event {event_name}: {e}")

# Global instance for stub purposes
bus = EventBus()
